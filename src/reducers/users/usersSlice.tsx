import { async } from '@firebase/util';
import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import { IUser, IUserCreate, IUserState } from '../../api/users/interfasec';
import { createUser, deleteUser, getSingleUser, getUsers, editUser } from '../../api/users/users';


// -------------------------------------- INITIAL STATE -----------------------------------------------------
const initialState: IUserState = {
    userIsLoading: false,
};


// -------------------------------------- THUNKS -----------------------------------------------------
export const getAllUsersThunk = createAsyncThunk(
    'getAllUsers',
    async(_, {dispatch}) => {
        const response = await getUsers()
        dispatch(usersActions.setUsers(response.data))
    }
)

export const getSingleUserThunk = createAsyncThunk(
    'getSingleUser',
    async(id: string | undefined, {dispatch}) => {
        const response = await getSingleUser(id)
        dispatch(usersActions.setUser(response.data))
    }
)

export const createUserThunk = createAsyncThunk(
    'createUserThunk',
    async(data: IUserCreate) => {
        const response = await createUser(data)
    }
)

export const editUserThunk = createAsyncThunk(
    'editUser',
    async(data: IUser) => {
        const response = await editUser(data)
    }
)

export const deleteUserThunk = createAsyncThunk(
    'deleteUser',
    async(id: string | undefined) => {
        const response = await deleteUser(id)
    }
)


// -------------------------------------- REDUCERS -----------------------------------------------------
export const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        setUsers(state: IUserState, action: PayloadAction<IUser[]>){
            state.users = action.payload
        },
        setUser(state: IUserState, action: PayloadAction<IUser>){
            state.user = action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getAllUsersThunk.pending, (state: IUserState) => {
            state.userIsLoading = true
        })
        builder.addCase(getAllUsersThunk.fulfilled, (state: IUserState) => {
            state.userIsLoading = false
        })
        builder.addCase(getAllUsersThunk.rejected, (state: IUserState, action: any) => {
            state.userIsLoading = false
            state.userErrorMessage = action.error.message
        })
        builder.addCase(createUserThunk.pending, (state: IUserState) => {
            state.userIsLoading = true
        })
        builder.addCase(createUserThunk.fulfilled, (state: IUserState) => {
            state.userIsLoading = false
        })
        builder.addCase(createUserThunk.rejected, (state: IUserState, action: any) => {
            state.userIsLoading = false
            state.userErrorMessage = action.error.message
        })
        builder.addCase(editUserThunk.pending, (state: IUserState) => {
            state.userIsLoading = true
        })
        builder.addCase(editUserThunk.fulfilled, (state: IUserState) => {
            state.userIsLoading = false
        })
        builder.addCase(editUserThunk.rejected, (state: IUserState, action: any) => {
            state.userIsLoading = false
            state.userErrorMessage = action.error.message
        })
        builder.addCase(deleteUserThunk.pending, (state: IUserState) => {
            state.userIsLoading = true
        })
        builder.addCase(deleteUserThunk.fulfilled, (state: IUserState) => {
            state.userIsLoading = false
        })
        builder.addCase(deleteUserThunk.rejected, (state: IUserState, action: any) => {
            state.userIsLoading = false
            state.userErrorMessage = action.error.message
        })
    }
})


export const usersActions = usersSlice.actions
export const usersReducers = usersSlice.reducer