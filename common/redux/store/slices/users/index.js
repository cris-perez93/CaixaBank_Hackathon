import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const userSlice = createSlice({
  name: 'users',
  initialState: {
    list: [],
    loading: false,
    error: null
  },
  reducers: {
    getUsers: (state, action) => {
      state.list = action.payload
    }
  }

})

export const { getUsers } = userSlice.actions
export default userSlice.reducer

export const fetchUsers = () => dispatch => {
  axios.get('https://jsonplaceholder.typicode.com/users')
    .then(res => {
      dispatch(getUsers(res.data))
    }
    )
    .catch(err => {
      console.log(err)
    })
}
