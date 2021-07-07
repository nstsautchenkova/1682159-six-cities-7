const getRatingsEntries = (ratingToValues) => Object.entries(ratingToValues);
const checkValid = (comment, rating, CommentSetting) => ((comment.length >= CommentSetting.LENGHT_MIN) || (comment.length <= CommentSetting.LENGHT_MAX)) && ((rating > CommentSetting.RATING_MIN));
export { getRatingsEntries, checkValid };
