import { CommentSetting } from '../../const.js';
const getRatingsEntries = (ratingToValues) => Object.entries(ratingToValues);
const checkIsFormValid = (comment) => ((comment.length < CommentSetting.LENGHT_MIN) || (comment.length > CommentSetting.LENGHT_MAX));
export { getRatingsEntries, checkIsFormValid };
