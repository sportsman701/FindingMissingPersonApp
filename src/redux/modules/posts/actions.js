import * as types from './types'

import { createAction } from 'redux-actions';

export const getPostsList = createAction(types.GET_POSTS_LIST);
export const getPostsListSuccess = createAction(types.GET_POSTS_LIST_SUCCESS);
export const getPostsListFail = createAction(types.GET_POSTS_LIST_FAIL);
export const createPost = createAction(types.CREATE_POST);
export const createPostSuccess = createAction(types.CREATE_POST_SUCCESS);
export const uploadFile = createAction(types.UPLOAD_FILE);
export const togglePostVisibility = createAction(types.TOGGLE_POST_VISIBILITY);
export const togglePostVisibilitySuccess = createAction(types.TOGGLE_POST_VISIBILITY_SUCCESS);
export const deletePost = createAction(types.DELETE_POST);
export const deletePostSuccess = createAction(types.DELETE_POST_SUCCESS);
export const updatePost = createAction(types.UPDATE_POST);
export const updatePostSuccess = createAction(types.UPDATE_POST_SUCCESS);
export const reportPost = createAction(types.REPORT_POST);
export const savePost = createAction(types.SAVE_POST);
export const sharePost = createAction(types.SHARE_POST);
export const sharePostSuccess = createAction(types.SHARE_POST_SUCCESS);
export const likePost = createAction(types.LIKE_POST);