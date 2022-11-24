import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { PictureModule } from './picture/picture.module';
import { ProfilModule } from './profil/profil.module';
import { SearchModule } from './search/search.module';
import { LikeModule } from './like/like.module';
import { ReportModule } from './report/report.module';
import { ConversationModule } from './conversation/conversation.module';
import { MessageModule } from './message/message.module';

@Module({
  imports: [
    UserModule,
    PictureModule,
    ProfilModule,
    SearchModule,
    LikeModule,
    ReportModule,
    ConversationModule,
    MessageModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
