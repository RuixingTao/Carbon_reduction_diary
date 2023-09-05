var t = require("../@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.deleteTagEntInfoAndUserInfo = exports.getOrgProcessMsg = exports.getUserProcessMsg = exports.addTagUserInfo = exports.orgOrgInfolist = exports.getAllUserInfoByEntId = exports.getEntInfoByEntId = exports.getUserInfoByUserPhone = exports.getUserMappingTypeByUserPhone = exports.addTagEntInfoAndUserInfo = exports.getOrgInfoByUserPhoneByAll = exports.smscodeEnterpriseverified = exports.addressStreetList = exports.addressJson = exports.activityShareBrowseLog = exports.activityinfoSignUp = exports.activityLiveList = exports.activityinfoList = exports.userActivityWriteOff = exports.userActivityTicketCheck = exports.userActivityTicketCheckQrCode = exports.userActivityTicketCodeCheck = exports.userDiscountWriteOff = exports.userDiscountWriteOffCheck = exports.userDiscountCheckQrCode = exports.userDiscountDiscountCodeCheck = exports.userDiscountWriteOffCode = exports.userDiscountUserDiscountList = exports.userDiscountApply = exports.userActivityUserTicketDetails = exports.userActivityUserTicketFinish = exports.userActivityUserTicketCancel = exports.userActivityUserActivityOrder = exports.userActivityUserActivityList = exports.activityinfoActivityApply = exports.activitApplyFormMappingList = exports.activityTicketList = exports.activityApplyPerList = exports.activityinfoActivityDetails = exports.taskRetunrepair = exports.taskReceiverepair = exports.taskSavefeedback = exports.taskTotalpoints = exports.taskRepairtasklist = exports.taskList = exports.usermessageRead = exports.smallProgramQrGetByScene = exports.smallProgramQrCreateQr = exports.commentReplysList = exports.memberFocuslist = exports.memberFanslist = exports.memberShareBrowses = exports.userArticlesReject = exports.userArticlesPass = exports.userArticlesAuditList = exports.userMessageBatchread = exports.userMessageDetalis = exports.messageList = exports.praiseList = exports.usermessageComment = exports.memberClick = exports.usermessageRedDot = exports.memberMember = exports.memberAuthority = exports.getUserArticlesDetails = exports.getSserArticlesDetails = exports.userArticlesDelete = exports.userArticlesWithdraw = exports.getUserArticleList = exports.getColumnByCode = exports.userAddArticles = exports.tagListByTagGroupObject = exports.getOrgListByUserPhone = exports.collectionlist = exports.smallProgramActionRecord = exports.memberDeleteFocus = exports.memberAddfocus = exports.addSmallProgramUser = exports.smallProgramUser = exports.wechatInfo = exports.repairSave = exports.orgUser = exports.repairDetail = exports.repairList = exports.smscodeSend = exports.serverList = exports.articleCommentsDelete = exports.articleCommentAddReplys = exports.articleCommentsAddComment = exports.articleCommentPraises = exports.articleCommentsList = exports.memberDeletecollection = exports.memberAddcollection = exports.praisesCancelPraise = exports.praisesPraise = exports.articlesDetailsNew = exports.userArticlesQueryList = exports.articlesOfficialArticleList = exports.bookshelfsAdverts = exports.bookshelfsRecommendList = void 0, 
exports.messageHandled = exports.leavingMessagesDetail = exports.carbonBuy = exports.leavingMessagesList = exports.leavingMessagesAdd = exports.carbonRank = exports.carbonList = exports.carbonCalculate = exports.getUserYearCertificate = exports.userCarbonFootprint = exports.memberUserCarbonInfo = exports.activityinfoRecallActivity = exports.commentPraise = exports.commentPageList = exports.comment = exports.deleteArticleColumnsMapping = exports.articlesGetArticleColumns = exports.articlesCancelAdvert = exports.articlesCancelTop = exports.articlesCancelPopular = exports.articlesUpdateSort = exports.userArticlesSortInfo = exports.recommendArticlesCancelRecommend = exports.recommendArticlesSetRecommend = exports.housesList = exports.buildingfloorsList = exports.buildingsList = exports.getEntSignContractInfo = exports.parkPublicResourceAppointmentsAppointmentAudit = exports.parkPublicResourceAppointmentsAppointmentList = exports.parkPublicResourceAppointmentsUpdate = exports.parkPublicResourceAppointmentsDetails = exports.parkPublicResourceAppointmentsAdd = exports.userAppointmentResourceList = exports.userAppointmentList = exports.parkAuthority = exports.parkStatistics = exports.orgGetUserPassEntList = exports.orgGetUserEntList = exports.assetscountUnderAssets = exports.getAllColumns = exports.getVisitorUserDetail = exports.addUserRegister = exports.visitorApplicationUpdate = exports.visitorApplicationDetail = exports.visitorApplicationAdd = exports.getVisitorApplicationList = exports.repairEvaluate = exports.getAssetsInfoById = exports.appointmentAdd = exports.getOrgInfoByUserPhone = exports.assetsList = exports.appointmentList = exports.addVisitor = exports.listAccess = exports.listVisitors = exports.delApartmentUser = exports.listUserByApartmentId = exports.listMyApartments = exports.cancelApartment = exports.apartmentUserRegister = exports.getUserInfoToPhone = exports.listApartment = exports.saveOrUpdateApartment = exports.getCurWholeUserInfo = exports.orgupdateUserInfo = exports.smallProgramUserUpdateUserInfo = exports.updateUserInfo = exports.unionUserInfo = exports.getServerInfoListByNeedProminent = exports.parkArticleList = exports.articlelistByName = exports.rankingsVitality = exports.getTagInfoByTagId = exports.getZxbaSqDetail = exports.zxbaApply = exports.getTaskLinkHs = exports.getCarInfoByEntId = exports.deleteCarInfo = exports.addCarInfo = exports.hlGetPowerInfo = exports.hlBindingHm = exports.hlGetHm = exports.getCarInfoList = exports.getCarModelInfo = exports.getCarInfoType = exports.taskRanking = exports.taskPointslist = exports.updateSHTagUserInfoByAdmin = exports.deleteTagUserInfoByAdmin = exports.addTagUserInfoByAdmin = exports.getUserInfoByEntId = exports.updateSHTagUserInfo = void 0;

var e = t(require("../utils/request"));

exports.bookshelfsRecommendList = function(t) {
    return (0, e.default)("bookshelfs/recommendList", t, "post");
};

exports.bookshelfsAdverts = function(t) {
    return (0, e.default)("bookshelfs/adverts", t, "post");
};

exports.articlesOfficialArticleList = function(t) {
    return (0, e.default)("articles/officialArticleList", t, "post");
};

exports.userArticlesQueryList = function(t) {
    return (0, e.default)("userArticles/queryList", t, "post");
};

exports.articlesDetailsNew = function(t) {
    return (0, e.default)("articles/detailsNew", t, "post");
};

exports.praisesPraise = function(t) {
    return (0, e.default)("praises/praise", t, "post");
};

exports.praisesCancelPraise = function(t) {
    return (0, e.default)("praises/cancelPraise", t, "post");
};

exports.memberAddcollection = function(t) {
    return (0, e.default)("member/addcollection", t, "post");
};

exports.memberDeletecollection = function(t) {
    return (0, e.default)("member/deletecollection", t, "post");
};

exports.articleCommentsList = function(t) {
    return (0, e.default)("articleComments/list", t, "post");
};

exports.articleCommentPraises = function(t) {
    return (0, e.default)("articleCommentPraises/praise", t, "post");
};

exports.articleCommentsAddComment = function(t) {
    return (0, e.default)("articleComments/addComment", t, "post");
};

exports.articleCommentAddReplys = function(t) {
    return (0, e.default)("articleCommentReplys/addReply", t, "post");
};

exports.articleCommentsDelete = function(t) {
    return (0, e.default)("articleComments/delete", t, "delete");
};

exports.serverList = function(t) {
    return (0, e.default)("server/getServerInfoList");
};

exports.smscodeSend = function(t) {
    return (0, e.default)("smscode/send", t, "post");
};

exports.repairList = function(t) {
    return (0, e.default)("repair/list", t, "post");
};

exports.repairDetail = function(t) {
    return (0, e.default)("repair/detail/".concat(t));
};

exports.orgUser = function(t) {
    return (0, e.default)("org/orgUser");
};

exports.repairSave = function(t) {
    return (0, e.default)("repair/save", t, "post");
};

exports.wechatInfo = function(t) {
    return (0, e.default)("wechat/info", t, "post");
};

exports.smallProgramUser = function(t) {
    return (0, e.default)("smallProgramUser/user/".concat(t));
};

exports.addSmallProgramUser = function(t) {
    return (0, e.default)("smallProgramUser/user", t, "post");
};

exports.memberAddfocus = function(t) {
    return (0, e.default)("member/addfocus", t, "post");
};

exports.memberDeleteFocus = function(t) {
    return (0, e.default)("member/deletefocus", t, "post");
};

exports.smallProgramActionRecord = function(t) {
    return (0, e.default)("smallProgramAction/record", t, "post");
};

exports.collectionlist = function(t) {
    return (0, e.default)("member/collectionlist", t, "post");
};

exports.getOrgListByUserPhone = function(t) {
    return (0, e.default)("org/getOrgListByUserPhone");
};

exports.tagListByTagGroupObject = function(t) {
    return (0, e.default)("tag/listByTagGroupObject/".concat(t));
};

exports.userAddArticles = function(t) {
    return (0, e.default)("userArticles/smallProgramArticle", t, "post");
};

exports.getColumnByCode = function(t) {
    return (0, e.default)("columns/getColumnByCode/".concat(t));
};

exports.getUserArticleList = function(t) {
    return (0, e.default)("userArticles/userArticleList", t, "post");
};

exports.userArticlesWithdraw = function(t) {
    return (0, e.default)("userArticles/withdraw/".concat(t), null, "PUT");
};

exports.userArticlesDelete = function(t) {
    return (0, e.default)("userArticles/delete/".concat(t), null, "delete");
};

exports.getSserArticlesDetails = function(t) {
    return (0, e.default)("userArticles/article/".concat(t));
};

exports.getUserArticlesDetails = function(t) {
    return (0, e.default)("userArticles/queryDetails/".concat(t));
};

exports.memberAuthority = function(t) {
    return (0, e.default)("member/authority");
};

exports.memberMember = function(t) {
    return (0, e.default)("member/member");
};

exports.usermessageRedDot = function(t) {
    return (0, e.default)("usermessage/redDot");
};

exports.memberClick = function(t) {
    return (0, e.default)("member/click/".concat(t));
};

exports.usermessageComment = function(t) {
    return (0, e.default)("usermessage/commentmessage", t, "post");
};

exports.praiseList = function(t) {
    return (0, e.default)("praises/praiseList", t, "post");
};

exports.messageList = function(t) {
    return (0, e.default)("usermessage/list", t, "post");
};

exports.userMessageDetalis = function(t) {
    return (0, e.default)("usermessage/detalis/".concat(t));
};

exports.userMessageBatchread = function(t) {
    return (0, e.default)("usermessage/batchread");
};

exports.userArticlesAuditList = function(t) {
    return (0, e.default)("userArticles/auditList", t, "post");
};

exports.userArticlesPass = function(t) {
    return (0, e.default)("userArticles/pass", t, "post");
};

exports.userArticlesReject = function(t) {
    return (0, e.default)("userArticles/reject", t, "post");
};

exports.memberShareBrowses = function(t) {
    return (0, e.default)("member/shareBrowses", t, "post");
};

exports.memberFanslist = function(t) {
    return (0, e.default)("member/fanslist", t, "post");
};

exports.memberFocuslist = function(t) {
    return (0, e.default)("member/focuslist", t, "post");
};

exports.commentReplysList = function(t) {
    return (0, e.default)("articleCommentReplys/list", t, "post");
};

exports.smallProgramQrCreateQr = function(t) {
    return (0, e.default)("smallProgramQr/createQr", t, "post");
};

exports.smallProgramQrGetByScene = function(t) {
    return (0, e.default)("smallProgramQr/getByScene/".concat(t));
};

exports.usermessageRead = function(t) {
    return (0, e.default)("usermessage/read/".concat(t));
};

exports.taskList = function(t) {
    return (0, e.default)("task/list", t, "post");
};

exports.taskRepairtasklist = function(t) {
    return (0, e.default)("task/repairtasklist", t, "post");
};

exports.taskTotalpoints = function(t) {
    return (0, e.default)("task/totalpoints");
};

exports.taskSavefeedback = function(t) {
    return (0, e.default)("task/savefeedback", t, "post");
};

exports.taskReceiverepair = function(t) {
    return (0, e.default)("task/receiverepair", t, "post");
};

exports.taskRetunrepair = function(t) {
    return (0, e.default)("task/retunrepair", t, "post");
};

exports.activityinfoActivityDetails = function(t) {
    return (0, e.default)("activityinfo/activityDetails/".concat(t));
};

exports.activityApplyPerList = function(t) {
    return (0, e.default)("activityApplyPer/list", t, "post");
};

exports.activityTicketList = function(t) {
    return (0, e.default)("activityTicket/list/".concat(t));
};

exports.activitApplyFormMappingList = function(t) {
    return (0, e.default)("activitApplyFormMapping/list/".concat(t));
};

exports.activityinfoActivityApply = function(t) {
    return (0, e.default)("activityinfo/activityApply", t, "post");
};

exports.userActivityUserActivityList = function(t) {
    return (0, e.default)("userActivity/userActivityList", t, "post");
};

exports.userActivityUserActivityOrder = function(t) {
    return (0, e.default)("userActivity/userActivityOrder", t, "post");
};

exports.userActivityUserTicketCancel = function(t) {
    return (0, e.default)("userActivity/userTicketCancel", t, "post");
};

exports.userActivityUserTicketFinish = function(t) {
    return (0, e.default)("userActivity/userTicketFinish", t, "post");
};

exports.userActivityUserTicketDetails = function(t) {
    return (0, e.default)("userActivity/userTicketDetails/".concat(t));
};

exports.userDiscountApply = function(t) {
    return (0, e.default)("userDiscount/apply", t, "post");
};

exports.userDiscountUserDiscountList = function(t) {
    return (0, e.default)("userDiscount/userDiscountList", t, "post");
};

exports.userDiscountWriteOffCode = function(t) {
    return (0, e.default)("userDiscount/writeOffCode/".concat(t));
};

exports.userDiscountDiscountCodeCheck = function(t) {
    return (0, e.default)("userDiscount/discountCodeCheck", t, "post");
};

exports.userDiscountCheckQrCode = function(t) {
    return (0, e.default)("userDiscount/checkQrCode", t, "post");
};

exports.userDiscountWriteOffCheck = function(t) {
    return (0, e.default)("userDiscount/writeOffCheck", t, "post");
};

exports.userDiscountWriteOff = function(t) {
    return (0, e.default)("userDiscount/writeOff/".concat(t));
};

exports.userActivityTicketCodeCheck = function(t) {
    return (0, e.default)("userActivity/ticketCodeCheck", t, "post");
};

exports.userActivityTicketCheckQrCode = function(t) {
    return (0, e.default)("userActivity/ticketCheckQrCode", t, "post");
};

exports.userActivityTicketCheck = function(t) {
    return (0, e.default)("userActivity/ticketCheck", t, "post");
};

exports.userActivityWriteOff = function(t) {
    return (0, e.default)("userActivity/writeOff/".concat(t));
};

exports.activityinfoList = function(t) {
    return (0, e.default)("activityinfo/list", t, "post");
};

exports.activityLiveList = function(t) {
    return (0, e.default)("activityLive/list", t, "post");
};

exports.activityinfoSignUp = function(t) {
    return (0, e.default)("activityinfo/signUp/".concat(t));
};

exports.activityShareBrowseLog = function(t) {
    return (0, e.default)("activityShareBrowseLog/log", t, "post");
};

exports.addressJson = function(t) {
    return (0, e.default)("common/address/addressJson");
};

exports.addressStreetList = function(t) {
    return (0, e.default)("common/address/townStreetList/".concat(t));
};

exports.smscodeEnterpriseverified = function(t) {
    return (0, e.default)("smscode/enterpriseverified", t, "post");
};

exports.getOrgInfoByUserPhoneByAll = function(t) {
    return (0, e.default)("org/getOrgInfoByUserPhoneByAll");
};

exports.addTagEntInfoAndUserInfo = function(t) {
    return (0, e.default)("org/addTagEntInfoAndUserInfo", t, "post");
};

exports.getUserMappingTypeByUserPhone = function(t) {
    return (0, e.default)("org/getUserMappingTypeByUserPhone");
};

exports.getUserInfoByUserPhone = function(t) {
    return (0, e.default)("org/getUserInfoByUserPhone", t, "post");
};

exports.getEntInfoByEntId = function(t) {
    return (0, e.default)("org/getEntInfoByEntId/".concat(t));
};

exports.getAllUserInfoByEntId = function(t) {
    return (0, e.default)("org/getAllUserInfoByEntId", t, "post");
};

exports.orgOrgInfolist = function(t) {
    return (0, e.default)("org/orgOrgInfolist", t, "post");
};

exports.addTagUserInfo = function(t) {
    return (0, e.default)("org/addTagUserInfo", t, "post");
};

exports.getUserProcessMsg = function(t) {
    return (0, e.default)("org/getUserProcessMsg", t, "post");
};

exports.getOrgProcessMsg = function(t) {
    return (0, e.default)("org/getOrgProcessMsg/".concat(t));
};

exports.deleteTagEntInfoAndUserInfo = function(t) {
    return (0, e.default)("org/deleteTagEntInfoAndUserInfo", t, "post");
};

exports.updateSHTagUserInfo = function(t) {
    return (0, e.default)("org/updateSHTagUserInfo", t, "post");
};

exports.getUserInfoByEntId = function(t) {
    return (0, e.default)("org/getUserInfoByEntId", t, "post");
};

exports.addTagUserInfoByAdmin = function(t) {
    return (0, e.default)("org/addTagUserInfoByAdmin", t, "post");
};

exports.deleteTagUserInfoByAdmin = function(t) {
    return (0, e.default)("org/deleteTagUserInfoByAdmin", t, "post");
};

exports.updateSHTagUserInfoByAdmin = function(t) {
    return (0, e.default)("org/updateSHTagUserInfoByAdmin", t, "post");
};

exports.taskPointslist = function(t) {
    return (0, e.default)("task/pointslist", t, "post");
};

exports.taskRanking = function(t) {
    return (0, e.default)("task/ranking/".concat(t));
};

exports.getCarInfoType = function(t) {
    return (0, e.default)("car/getCarInfoType", t, "post");
};

exports.getCarModelInfo = function(t) {
    return (0, e.default)("car/getCarModelInfo", t, "post");
};

exports.getCarInfoList = function(t) {
    return (0, e.default)("car/newList", {}, "post");
};

exports.hlGetHm = function(t) {
    return (0, e.default)("hl/getHm", t, "post");
};

exports.hlBindingHm = function(t) {
    return (0, e.default)("hl/bindingHm", t, "post");
};

exports.hlGetPowerInfo = function(t) {
    return (0, e.default)("hl/getPowerInfo", t, "post");
};

exports.addCarInfo = function(t) {
    return (0, e.default)("car/addCarInfo", t, "post");
};

exports.deleteCarInfo = function(t) {
    return (0, e.default)("car/deleteCarInfo/".concat(t));
};

exports.getCarInfoByEntId = function(t) {
    return (0, e.default)("car/getCarInfoByEntId", t, "post");
};

exports.getTaskLinkHs = function(t) {
    return (0, e.default)("zxba/getTaskLinkHs/".concat(t));
};

exports.zxbaApply = function(t) {
    return (0, e.default)("zxba/apply", t, "post");
};

exports.getZxbaSqDetail = function(t) {
    return (0, e.default)("zxba/getZxbaSqDetail/".concat(t));
};

exports.getTagInfoByTagId = function(t) {
    return (0, e.default)("tag/getTagInfoByTagId/".concat(t));
};

exports.rankingsVitality = function(t) {
    return (0, e.default)("rankings/vitality", t, "post");
};

exports.articlelistByName = function(t) {
    return (0, e.default)("articles/articlelistByName", t, "post");
};

exports.parkArticleList = function(t) {
    return (0, e.default)("articles/parkArticleList", t, "post");
};

exports.getServerInfoListByNeedProminent = function(t) {
    return (0, e.default)("server/getServerInfoListByNeedProminent");
};

exports.unionUserInfo = function(t) {
    return (0, e.default)("unionUser/unionUserInfo");
};

exports.updateUserInfo = function(t) {
    return (0, e.default)("unionUser/updateUserInfo", t, "put");
};

exports.smallProgramUserUpdateUserInfo = function(t) {
    return (0, e.default)("smallProgramUser/updateUserInfo", t, "put");
};

exports.orgupdateUserInfo = function(t) {
    return (0, e.default)("org/updateUserInfo", t, "put");
};

exports.getCurWholeUserInfo = function(t) {
    return (0, e.default)("orgUserWholeInfo/getCurWholeUserInfo");
};

exports.saveOrUpdateApartment = function(t) {
    return (0, e.default)("apartment/saveOrUpdateApartment", t, "post");
};

exports.listApartment = function(t) {
    return (0, e.default)("apartment/listApartment", t, "post");
};

exports.getUserInfoToPhone = function(t) {
    return (0, e.default)("orgUserWholeInfo/getCurWholeUserInfo/".concat(t));
};

exports.apartmentUserRegister = function(t) {
    return (0, e.default)("orgUserWholeInfo/apartmentUserRegister", t, "post");
};

exports.cancelApartment = function(t) {
    return (0, e.default)("apartment/cancelApartment/".concat(t));
};

exports.listMyApartments = function(t) {
    return (0, e.default)("apartment/listMyApartments");
};

exports.listUserByApartmentId = function(t) {
    return (0, e.default)("orgUserWholeInfo/listUserByApartmentId/".concat(t));
};

exports.delApartmentUser = function(t) {
    return (0, e.default)("orgUserWholeInfo/delApartmentUser", t, "delete");
};

exports.listVisitors = function(t) {
    return (0, e.default)("visitor/listVisitors", t, "post");
};

exports.listAccess = function(t) {
    return (0, e.default)("visitor/listAccess", t, "post");
};

exports.addVisitor = function(t) {
    return (0, e.default)("visitor/save", t, "post");
};

exports.appointmentList = function(t) {
    return (0, e.default)("appointment/list", t, "post");
};

exports.assetsList = function(t) {
    return (0, e.default)("assets/list", t, "post");
};

exports.getOrgInfoByUserPhone = function(t) {
    return (0, e.default)("org/getOrgInfoByUserPhone/".concat(t), "get");
};

exports.appointmentAdd = function(t) {
    return (0, e.default)("appointment/add", t, "post");
};

exports.getAssetsInfoById = function(t) {
    return (0, e.default)("assets/getAssetsInfoById/".concat(t));
};

exports.repairEvaluate = function(t) {
    return (0, e.default)("repair/evaluate", t, "post");
};

exports.getVisitorApplicationList = function(t) {
    return (0, e.default)("visitorApplication/list", t, "post");
};

exports.visitorApplicationAdd = function(t) {
    return (0, e.default)("visitorApplication/add", t, "post");
};

exports.visitorApplicationDetail = function(t) {
    return (0, e.default)("visitorApplication/getApplication/".concat(t));
};

exports.visitorApplicationUpdate = function(t) {
    return (0, e.default)("visitorApplication/updateApplication", t, "put");
};

exports.addUserRegister = function(t) {
    return (0, e.default)("visitorApplication/userRegister", t, "post");
};

exports.getVisitorUserDetail = function(t) {
    return (0, e.default)("visitorApplication/getApplicationUserInfo", t, "post");
};

exports.getAllColumns = function(t) {
    return (0, e.default)("smallProgramColumns/allColumns?version=".concat(t || 1), "get");
};

exports.assetscountUnderAssets = function(t) {
    return (0, e.default)("assets/countUnderAssets", "get");
};

exports.orgGetUserEntList = function(t) {
    return (0, e.default)("org/getUserEntList", "get");
};

exports.orgGetUserPassEntList = function(t) {
    return (0, e.default)("org/getUserPassEntList", "get");
};

exports.parkStatistics = function(t) {
    return (0, e.default)("park/statistics", t, "post");
};

exports.parkAuthority = function(t) {
    return (0, e.default)("park/authority", t, "post");
};

exports.userAppointmentList = function(t) {
    return (0, e.default)("parkPublicResourceAppointments/userAppointmentList", t, "post");
};

exports.userAppointmentResourceList = function(t) {
    return (0, e.default)("parkPublicResources/userAppointmentResourceList", t, "post");
};

exports.parkPublicResourceAppointmentsAdd = function(t) {
    return (0, e.default)("parkPublicResourceAppointments/add", t, "post");
};

exports.parkPublicResourceAppointmentsDetails = function(t) {
    return (0, e.default)("parkPublicResourceAppointments/details/".concat(t));
};

exports.parkPublicResourceAppointmentsUpdate = function(t) {
    return (0, e.default)("parkPublicResourceAppointments/update", t, "put");
};

exports.parkPublicResourceAppointmentsAppointmentList = function(t) {
    return (0, e.default)("parkPublicResourceAppointments/appointmentList", t, "post");
};

exports.parkPublicResourceAppointmentsAppointmentAudit = function(t) {
    return (0, e.default)("parkPublicResourceAppointments/".concat(t.type), t, "put");
};

exports.getEntSignContractInfo = function(t) {
    return (0, e.default)("ent/getEntSignContractInfo/".concat(t));
};

exports.buildingsList = function() {
    return (0, e.default)("buildings/list", {}, "post");
};

exports.buildingfloorsList = function(t) {
    return (0, e.default)("buildingfloors/list", t, "post");
};

exports.housesList = function(t) {
    return (0, e.default)("houses/list", t, "post");
};

exports.recommendArticlesSetRecommend = function(t) {
    return (0, e.default)("recommendArticles/setRecommend", t, "put");
};

exports.recommendArticlesCancelRecommend = function(t) {
    return (0, e.default)("recommendArticles/cancelRecommend", t, "put");
};

exports.userArticlesSortInfo = function(t) {
    return (0, e.default)("userArticles/sortInfo", t, "post");
};

exports.articlesUpdateSort = function(t) {
    return (0, e.default)("articles/updateSort", t, "post");
};

exports.articlesCancelPopular = function(t) {
    return (0, e.default)("articles/cancelPopular", t, "post");
};

exports.articlesCancelTop = function(t) {
    return (0, e.default)("articles/cancelTop", t, "post");
};

exports.articlesCancelAdvert = function(t) {
    return (0, e.default)("articles/cancelAdvert", t, "post");
};

exports.articlesGetArticleColumns = function(t) {
    return (0, e.default)("articles/getArticleColumns/".concat(t));
};

exports.deleteArticleColumnsMapping = function(t) {
    return (0, e.default)("articles/deleteArticleColumnsMapping", t, "delete");
};

exports.comment = function(t) {
    return (0, e.default)("activityComments/comment", t, "post");
};

exports.commentPageList = function(t) {
    return (0, e.default)("activityComments/commentPageList", t, "post");
};

exports.commentPraise = function(t) {
    return (0, e.default)("activityComments/commentPraise", t, "post");
};

exports.activityinfoRecallActivity = function(t) {
    return (0, e.default)("activityinfo/recallActivity", t, "put");
};

exports.memberUserCarbonInfo = function() {
    return (0, e.default)("member/userCarbonInfo");
};

exports.userCarbonFootprint = function(t) {
    return (0, e.default)("smallProgramUser/userCarbonFootprint", t, "post");
};

exports.getUserYearCertificate = function(t) {
    return (0, e.default)("carbon/getUserYearCertificate/".concat(t));
};

exports.carbonCalculate = function(t) {
    return (0, e.default)("carbon/calculate", t, "post");
};

exports.carbonList = function(t) {
    return (0, e.default)("carbon/list", t, "post");
};

exports.carbonRank = function() {
    return (0, e.default)("carbon/rank");
};

exports.leavingMessagesAdd = function(t) {
    return (0, e.default)("leavingMessages/add", t, "post");
};

exports.leavingMessagesList = function(t) {
    return (0, e.default)("leavingMessages/spList", t, "post");
};

exports.carbonBuy = function(t) {
    return (0, e.default)(t ? "carbon/buy/".concat(t) : "carbon/buy");
};

exports.leavingMessagesDetail = function(t) {
    return (0, e.default)("leavingMessages/details/".concat(t));
};

exports.messageHandled = function(t) {
    return (0, e.default)("leavingMessages/handledMessage/".concat(t), {}, "put");
};