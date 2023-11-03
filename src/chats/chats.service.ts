import { Injectable } from '@nestjs/common';

@Injectable()
export class ChatsService {
    constructor(private authService: AuthService) { }
}
