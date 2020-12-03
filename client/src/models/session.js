const session = {
    user: null,
    username: null,
    user_id: null,
    usertype: null,
    notifications: [],
    addNotification(text, type='info'){
        this.notifications.push({text, type})
    },
    deleteNotification(i){
        this.notifications.splice(i, 1);
    }
};
//login puts a thing with an id into it
export default session;