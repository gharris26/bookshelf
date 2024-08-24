/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('table_name').del()
  await knex('table_name').insert([
    {
      id: 1,
      title: 'Pride and Prejudice',
      author: 'Jane Austen',
      cover_image:
        'https://cdn.kobo.com/book-images/afcd8653-3b27-4423-bee9-570fb1441aed/1200/1200/False/pride-and-prejudice-71.jpg',
      description:
        'A romantic novel of manners that depicts the British Regency-era society, focusing on the complex relationships and marriage prospects of Elizabeth Bennet.',
      review:
        'Loved this book! A definite favourite of mine that I keep coming back to.',
    },
    {
      id: 2,
      title: 'Little Women',
      author: 'Louisa May Alcott',
      cover_image:
        'https://ih1.redbubble.net/image.3925267243.4108/flat,750x,075,f-pad,750x1000,f8f8f8.jpg',
      description:
        'The story of the four March sisters—Meg, Jo, Beth, and Amy—growing up in Civil War-era America, navigating the challenges of family, love, and finding their place in the world.',
      review:
        'When I first read this book in high school, I was upset with the ending. While I am older and still disappointed with Alcotts final ending, this is an absolute favourite and a joy to read. A real feel good.',
    },
    {
      id: 3,
      title: 'All the Light We Cannot See',
      author: 'Anthony Doerr',
      cover_image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzSw0Ic6aZkdvpEVqJhitV-UBME03YZjq4yg&s',
      description:
        'A historical novel set during World War II, intertwining the lives of a blind French girl and a German soldier, exploring themes of survival, resilience, and the impact of war.',
      review:
        'My number one book and top recommendation. Doerr writes beautifully and the shifting perspectives of the story take you on an amazing journey. As a history major, I really appreciate the historical setting and the interesting look into the Hitler Youth.',
    },
  ])
}
