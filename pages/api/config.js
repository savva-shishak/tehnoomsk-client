import { valueAtMode } from '../../utils/prod-dev';

export const domain = valueAtMode({ dev: 'http://ru.tehnoomsk', prod: 'https://db.tehnoomsk.ru' });
