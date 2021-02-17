import IParseMailTemplateDTO from '../dtos/IParseMailTemplateDTO';

export default interface IMailTemplateprovider {
  parse(data: IParseMailTemplateDTO): Promise<string>;
}
