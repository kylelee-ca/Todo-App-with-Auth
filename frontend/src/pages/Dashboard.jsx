import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import TodoForm from '../components/TodoForm';
import Spinner from '../components/Spinner'
import { getTodos, reset } from '../features/todos/todoSlice';
import TodoItem from '../components/TodoItem';
function Dashboard() {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((state)=> state.auth)
  const { todos, isLoading, isError, message } = useSelector((state) => state.todos)

 
  useEffect(() => {
    if(isError) {
      console.log(message)
    }
    if(!user) {
      navigate('/login')
    }
    if(user) {
      dispatch(getTodos())
    }
    return () => {
      dispatch(reset())
    }
  },[user, navigate, isError, message, dispatch])

  if(isLoading) {
    return <Spinner />
  }
  return (
    <>
      <section className="heading">
        <h1>Welcome {user && user.name}</h1>
        <p>Todos Dashboard</p>
        <TodoForm />
        <section className="content">
          {todos.length > 0 ? (
          <div className='todos'>
            {todos.map((todo) => (
              <TodoItem key={todo._id} todo={todo} />
            ))}
          </div>
          ) : (
          <h3>You have not set any todos</h3>
          )}
        </section>
      </section>
    </>
  )
}

export default Dashboard