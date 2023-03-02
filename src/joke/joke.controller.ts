import { Controller, Get, Post } from '@nestjs/common';

@Controller('jokes')
export class JokeController {
  @Get()
  getAllJokes() {
    return [
      {
        Des: 'A child asked his father, "How were people born?" So his father said, "Adam and Eve made babies, then their babies became adults and made babies, and so on." The child then went to his mother, asked her the same question and she told him, "We were monkeys then we evolved to become like we are now." The child ran back to his father and said, "You lied to me!" His father replied, "No, your mom was talking about her side of the family."',
      },
      {
        Des: 'HiBer for fun go to school and chill with his friend, But suddenly he remembers that none of his friends are still alive!',
      },
      {
        Des: 'A wife who is disappointed about her husband coming home late from work should confide in her friend. She advised: “Instead of berating him, say sweet words and greet him with a kiss. Maybe he will change.” That night, the husband came home late, the wife',
      },
    ];
  }

  @Post()
  createStory() {
    return [
      {
        story:
          'A child asked his father, "How were people born?" So his father said, "Adam and Eve made babies, then their babies became adults and made babies, and so on." The child then went to his mother, asked her the same question and she told him, "We were monkeys then we evolved to become like we are now." The child ran back to his father and said, "You lied to me!" His father replied, "No, your mom was talking about her side of the family."',
      },
      {
        story:
          'HiBer for fun go to school and chill with his friend, But suddenly he remembers that none of his friends are still alive!',
      },
      {
        story:
          'A wife who is disappointed about her husband coming home late from work should confide in her friend. She advised: “Instead of berating him, say sweet words and greet him with a kiss. Maybe he will change.” That night, the husband came home late, the wife',
      },
    ];
  }
}
