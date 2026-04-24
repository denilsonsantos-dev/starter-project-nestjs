import { ConfigModule } from '@nestjs/config';

import * as Joi from 'joi';

export const envConfig = ConfigModule.forRoot({
  isGlobal: true,
  envFilePath: [`.env.${process.env.NODE_ENV}`, '.env'],

  validationSchema: Joi.object({
    NODE_ENV: Joi.string().valid('development', 'production', 'test'),

    // Adicione novas validações de variáveis aqui embaixo para verificá-las na inicializaçõo do projeto
  }),

  validationOptions: {
    allowUnknown: true, // permite outras env vars do sistema
    abortEarly: false, // mostra todos os erros juntos
  },
});
