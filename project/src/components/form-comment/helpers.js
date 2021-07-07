const getRatingsEntries = (ratingToValues) => Object.entries(ratingToValues);
const checkIsFormValid = (comment, CommentSetting) => ((comment.length < CommentSetting.LENGHT_MIN) || (comment.length > CommentSetting.LENGHT_MAX));
export { getRatingsEntries, checkIsFormValid };
