import IMailTemplateprovider from '../models/IMailTemplateprovider';

class FakeMailTemplateProvider implements IMailTemplateprovider {
  public async parse(): Promise<string> {
    return 'Mail Template';
  }
}

export default FakeMailTemplateProvider;
