import { CommentSetting } from '../../const.js';
const getRatingsEntries = (ratingToValues) => Object.entries(ratingToValues);
const checkIsFormValid = (comment) => ((comment.length < CommentSetting.LENGTH_MIN) || (comment.length > CommentSetting.LENGTH_MAX));
export { getRatingsEntries, checkIsFormValid };
