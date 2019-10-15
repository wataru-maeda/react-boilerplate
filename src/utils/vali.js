
export const tests = {
  input: {
    test: x => x && x.toString().replace(/\s/g, '').length > 0,
    error: '入力されていません',
  },
  number: {
    test: /^\d+$/,
    error: '数字を入力してください。',
  },
  password: {
    test: x => x && x.toString().replace(/\s/g, '').length >= 8,
    error: '８文字以上の英数字を入力してください。',
  },
  email: {
    test: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    error: '不正なEメールアドレスです。',
  },
  name: {
    test: /^[a-z]+([a-z- ',.-]?)+[a-z.]+$/i,
    error: '不正な文字が含まれています。',
  },
  address: {
    test: x => x && x.replace(/\s/g, '').length > 1,
    error: '不正な住所です。',
  },
  phone: {
    test: /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/,
    error: '不正な電話番号です。',
  },
  website: {
    test: /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/,
    error: '不正なURLです。',
  },
}

export const validate = (values, tests) => {
  const errors = {}
  let isError = false
  Object.keys(values).forEach((key) => {
    if (tests[key]) {
      const {
        test,
        error,
        options = {},
      } = tests[key]
      if (test && error) {
        const res = typeof test === 'function'
          ? test(values[key])
          : test.test(values[key])
        const skip = options.ifNotEmpty && !values[key].toString().length > 0
        if (!res && !skip) {
          isError = true
          errors[key] = error
        }
      }
    }
  })
  return { isError, errors }
}
