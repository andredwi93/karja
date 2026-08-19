import { getRequestConfig } from 'next-intl/server';
import { getUserLocale } from './locale';

export default getRequestConfig(async () => {
  const locale = await getUserLocale();
  const files = ['login', 'home', 'dashboard'];
  
  const messages: Record<string, any> = {};
  for (const file of files) {
    const content = (await import(`../lang/${locale}/${file}.json`)).default;
    messages[file] = content; 
  }

  return { locale, messages };
});

