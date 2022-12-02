import { Application } from 'https://deno.land/x/oak/mod.ts';

const app = new Application();

app.use((ctx) => {
  ctx.response.body = `
    <!DOCTYPE html>
    <html>
      <head>
        <title>Ммм, кальянчик</title>
        <style>
          body {
            display: flex;
            flex-direction: column;
            align-items: center;
          }      
        </style>
      <head>
      <body>
        <h1>Пока сидите на кальянной, там...</h1>
        <img src="https://raw.githubusercontent.com/Luvolunov/deno-test/main/img.png" />
      </body>
    </html>
  `;
});

await app.listen({ port: 8000 });
