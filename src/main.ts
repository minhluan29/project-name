import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create(AppModule, { cors: true });
  const PORT = 6969;
  await app.listen(PORT, () => {
    console.log(`app start with port ${PORT}`);
  });
}
bootstrap();
