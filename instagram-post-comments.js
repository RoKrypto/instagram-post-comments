//Validate if comment was made within event period
function isWithinEventPeriod(comment, eventStartingTimeStamp, eventEndingTimeStamp) {
	const commentTimeStamp = comment.querySelector('time.FH9sR').dateTime,
		  commentTimeStampFormat = new Date(commentTimeStamp),
		  eventStartingTimeStampFormat = new Date(eventStartingTimeStamp),
		  eventEndingTimeStampFormat = new Date(eventEndingTimeStamp);
	if(commentTimeStampFormat >= eventStartingTimeStampFormat && commentTimeStampFormat <= eventEndingTimeStampFormat) return true;
	return false;
}

// Get quantity of total comments and unique comments of an Instagram Post
function getInstagramPostsComments(parentCommentNodeSelector = 'ul.XQXOT > ul.Mr508', childCommentNodeSelector = 'ZyFrc', userNameCommentAnchorSelector = 'a.sqdOP', startingTimeStamp = '2021-07-06T18:20:07.000Z', endingTimeStamp = '2021-07-16T23:59:59.999Z') {
	const comments = [...document.querySelectorAll(parentCommentNodeSelector), ...document.querySelectorAll(childCommentNodeSelector)],
		  commentsQty = comments.length,
		  commentsWithinEventPeriod = comments.filter(comment => isWithinEventPeriod(comment, startingTimeStamp, endingTimeStamp)),
		  commentsWithinEventPeriodQty = commentsWithinEventPeriod.length,
		  uniqueCommentsUsers = Array.from(new Set(commentsWithinEventPeriod.map(comment => comment.querySelector(userNameCommentAnchorSelector).textContent))),
		  uniqueCommentsUsersQty = uniqueCommentsUsers.length;

	return {
		comments,
		commentsQty,
		commentsWithinEventPeriod,
		commentsWithinEventPeriodQty,
		uniqueCommentsUsers,
		uniqueCommentsUsersQty
	}
}