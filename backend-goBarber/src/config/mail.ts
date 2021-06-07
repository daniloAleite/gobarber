interface IMailConfig {
  driver: 'ethereal' | 'ses';

  defaults: {
    from: {
      email: string;
      name: string;
    };
  };
}

export default {
  driver: process.env.MAIL_DRIVE || 'ethereal',

  defaults: {
    from: {
      email: 'sistema@mydevproject.com.br',
      name: 'Sistema GOBARBER',
    },
  },
} as IMailConfig;
