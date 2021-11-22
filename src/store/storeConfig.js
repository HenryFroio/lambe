import { 
    createStore, 
    combineReducers,
    compose,
    applyMiddleware, 
} from 'redux'
import thunk from 'redux-thunk'
import userReducer from './reducers/users'
import postReducer from './reducers/posts'

const reducers = combineReducers({
    user: userReducer,
    posts: postReducer,
})

const storeConfig = () => {
    return createStore(reducers, compose(applyMiddleware(thunk)))
}

export default storeConfig