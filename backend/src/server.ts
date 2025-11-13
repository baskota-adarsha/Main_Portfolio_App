import app from './app'
import config from './config/config'
import { startPostScheduler } from './controllers/news.controller';

app.listen(config.port,()=>
{
console.log(`Server running on port ${config.port}`);
startPostScheduler();
  console.log('✅ News post scheduler initialized');

})