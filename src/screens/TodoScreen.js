import {StyleSheet, View, ActivityIndicator} from 'react-native';
import React, {useState, useEffect} from 'react';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {SwipeListView} from 'react-native-swipe-list-view';
import {useDispatch, useSelector} from 'react-redux';

import {
  Button,
  FormButton,
  FormField,
  FormImagePicker,
  ListTodo,
  Screen,
  ThemeToggleBtn,
  Text,
  HiddenLayer,
} from '../components';
import {auth, db} from '../config/firebase';
import {setIsLogin, setUserData} from '../store/authSlice';
import {addData, getAllTodo} from '../store/todoSlice';
import routes from '../navigation/routes';

const validationSchema = Yup.object().shape({
  todo: Yup.string().required().min(1, 'Please Provide Todo').label('Todo'),
  image: Yup.string().required().min(1, 'Image is required'),
});

const TodoScreen = ({navigation}) => {
  const userId = useSelector(state => state.authSlice.user.uid);
  const dispatch = useDispatch();
  const todoArr = useSelector(state => state.todoSlice.todo);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    db.collection('todos')
      .where('userId', '==', userId)
      .onSnapshot(snapshot => {
        dispatch(
          getAllTodo(
            snapshot.docs.map(doc => ({...doc.data(), docId: doc.id})),
          ),
        );
      });
    return () => dispatch(getAllTodo([]));
  }, []);

  const handleLogout = async () => {
    try {
      await auth.signOut();
      dispatch(setIsLogin(false));
      dispatch(setUserData({}));
    } catch (error) {
      alert(error);
    }
  };
  const handleSaveTodo = (values, {resetForm}) => {
    dispatch(addData({...values, setLoading, resetForm}));
  };
  const handleTodoDelete = async id => {
    try {
      await db.collection('todos').doc(id).delete();
    } catch (error) {
      alert(error);
    }
  };
  const handleTodoCompleteToggle = async item => {
    try {
      await db
        .collection('todos')
        .doc(item.docId)
        .update({...item, completed: !item.completed});
    } catch (error) {
      alert(error);
    }
  };
  return (
    <Screen additionalStyles={styles.container}>
      {loading && <ActivityIndicator size={'large'} animating={loading} />}
      <Formik
        initialValues={{
          image: '',
          todo: '',
        }}
        validationSchema={validationSchema}
        onSubmit={handleSaveTodo}>
        <>
          <View style={styles.upperContainer}>
            <FormImagePicker name={'image'} />
            <Text
              color="primary"
              additionalStyles={{flex: 1, textAlign: 'center'}}>
              Swipe to delete and complete
            </Text>
            <ThemeToggleBtn />
          </View>
          <FormField
            name={'todo'}
            placeholder="Enter Todo"
            autoCapitalize="none"
            autoCorrect={false}
          />
          <View style={styles.btnContainer}>
            <Button
              additionalStyles={{width: 150}}
              bgColor={'secondary'}
              color={'primary'}
              title={'Logout'}
              onPress={handleLogout}
            />
            <FormButton additionalStyles={{width: 150}} title={'save Todo'} />
          </View>
        </>
      </Formik>
      <SwipeListView
        data={todoArr}
        keyExtractor={item => item?.docId}
        renderItem={({item}) => (
          <ListTodo
            todo={item.todo}
            imgUri={item.imgUrl}
            completed={item.completed}
            onPress={() =>
              navigation.navigate(routes.TODO_DETAIL_SCREEN, {
                ...item,
              })
            }
          />
        )}
        style={{marginTop: 10}}
        renderHiddenItem={({item}) => (
          <HiddenLayer
            deletePress={() => handleTodoDelete(item.docId)}
            completePress={() => handleTodoCompleteToggle(item)}
          />
        )}
        leftOpenValue={70}
        rightOpenValue={-70}
      />
    </Screen>
  );
};

export default TodoScreen;

const styles = StyleSheet.create({
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  container: {
    paddingHorizontal: 10,
    paddingTop: 10,
  },
  upperContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
