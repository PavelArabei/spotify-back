import { Injectable } from '@nestjs/common';
import { CreateSongDto } from './dto/create-song.dto';
import { UpdateSongDto } from './dto/update-song.dto';

@Injectable()
export class SongsService {
  private readonly songs: CreateSongDto[] = [];
  create(createSongDto: CreateSongDto) {
    this.songs.push(createSongDto);
    return createSongDto;
  }

  findAll() {
    return this.songs;
  }

  findOne(id: number) {
    return `This action returns a #${id} song`;
  }

  update(id: number, updateSongDto: UpdateSongDto) {
    return `This action updates a #${id} song and dto ${JSON.stringify(updateSongDto)}`;
  }

  remove(id: number) {
    return `This action removes a #${id} song`;
  }
}
