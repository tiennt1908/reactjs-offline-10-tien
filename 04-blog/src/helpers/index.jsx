export const formatPostDate = (date) => {
    const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const time = new Date(date);
    const dayOfMonth = time.getDate();
    const year = time.getFullYear();
    return `${month[time.getMonth()]} ${dayOfMonth}, ${year}`;
}
//day js
export const getTimeSince = (date) => {
    let seconds = Math.floor((new Date() - new Date(date)) / 1000);
    let interval = seconds / 31536000;

    if (interval > 1) {
        return Math.floor(interval) + " năm trước";
    }
    interval = seconds / 2592000;
    if (interval > 1) {
        return Math.floor(interval) + " tháng trước";
    }
    interval = seconds / 86400;
    if (interval > 1) {
        return Math.floor(interval) + " ngày trước";
    }
    interval = seconds / 3600;
    if (interval > 1) {
        return Math.floor(interval) + " giờ trước";
    }
    interval = seconds / 60;
    if (interval > 1) {
        return Math.floor(interval) + " phút trước";
    }
    return Math.floor(seconds) + " giây trước";

}
export const parseStructPostData = (post) => {
    return {
        id: post.id,
        authorId: post.author,
        author: {
            nickname: post.author_data?.nickname,
            desc: post.author_data?.description,
            avatar: post.author_data?.avatar
        },
        categories: post.categories,
        commentCount: post.comment_count,
        commentStatus: post.comment_status,
        content: post.content?.rendered,
        date: post.date,
        excerpt: post.excerpt?.rendered,
        mediaURL: post.featured_media_url,
        link: post.link,
        slug: post.slug,
        tags: post.tags,
        title: post.title?.rendered,
        viewCount: post.view_count
    }
}
export const parseStructListMenu = (list) => {
    const parseStructMenu = (menu) => {
        const childItemsData = menu?.child_items || [];
        const child = childItemsData.map(parseStructMenu);
        return {
            id: menu.ID,
            child,
            title: menu.title,
            url: menu.url
        }
    }
    return list.map(parseStructMenu);
}
export const validate = {
    checkField(isError, message) {
        return {
            isError: isError,
            message: isError ? message : ""
        }
    },
    username({ value }) {
        const isError = !(/^[\w]{6,20}$/.test(value));
        return this.checkField(isError, "Vui lòng nhập username từ 6-20 ký tự.");
    },
    password({ value }) {
        const isError = !(/^[\w]{6,}$/.test(value));
        return this.checkField(isError, "Vui lòng nhập mật khẩu có ít nhất 6 ký tự.");
    },
    confirmPassword({ value, password }) {
        const isError = value !== password;
        return this.checkField(isError, "Mật khẩu không trùng khớp.");
    },
    email({ value }) {
        const isError = !(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(value));
        return this.checkField(isError, "Định dạng email không hợp lệ.");
    },
    nickName({ value }) {
        const isError = !(/^[A-Za-z]{2,20}$/.test(value));
        return this.checkField(isError, "Nickname có độ dài từ 2-20 ký tự và không chứa ký tự đặc biệt hoặc số.");
    },

}