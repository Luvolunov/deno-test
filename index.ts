import { Application } from 'https://deno.land/x/oak/mod.ts';

const app = new Application();

app.use((ctx) => {
  ctx.response.body = `
    <!DOCTYPE html>
    <html>
      <head><title>Ммм, кальянчик</title><head>
      <body>
        <h1>Привет всем на кальянной!!!</h1>
        <h2>Почему не работаем? :)</h2>
      </body>
    </html>
  `;
});

await app.listen({ port: 8000 });
