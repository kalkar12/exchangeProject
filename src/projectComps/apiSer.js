// export const URL_API = "http://monkeys.co.il";
export const URL_API = "/money.json";

export const doApiGet = async (_url) => {
  try {
    let resp = await fetch(_url);
    let data = await resp.json();
    return data;
  }
  catch (err) {
    console.log(err);
    alert("there problem , come back tommrow!")
    return err;
  }
}

