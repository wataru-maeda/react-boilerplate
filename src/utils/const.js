
const path = {
  auth: {
    login: '/login',
    signup: '/signup',
    resetPassword: '/reset-password',
    userInfo: '/set-user-info', 
    confirmEmail: '/confirm-email', 
  },
  home: {
    dashboard: '/home/dashboard',
  }
}

const message = {
  auth: {
    sendEmailConfirmationErr: '確認メールの送信に失敗しました。お手数ですが時間をおいて再度お試しください。',
    loginErr: 'ログインに失敗しました。お手数ですが、時間をおいて再度お試しください。',
  }
}

export {
  path,
  message,
}