export async function getData() {
  const res = await fetch(process.env.FILE_URL || '', {
    next: {
      revalidate: 60 * 60,
    },
  });
  const data = await res.text();
  return cleanJson(data);
}

function cleanJson(input: string) {
  const regex = /\,(?!\s*?[\{\[\"\'\w])/g;
  const json = input.replace(regex, '');
  return JSON.parse(json);
}
