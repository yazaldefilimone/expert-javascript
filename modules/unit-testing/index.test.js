const { rejects, deepStrictEqual } = require("assert");
const { error } = require("./src/constants");
const File = require("./src/file");

(async () => {
  {
    const filepath = "./mocks/empyFile-invalid.csv";

    const rejection = new Error(error.FILE_LENGTH_ERROR_MESSAGE);
    const result = File.csvToJson(filepath);
    await rejects(result, rejection);
  }

  {
    const filepath = "./mocks/fourItems-valid.csv";
    const rejection = new Error(error.FILE_LENGTH_ERROR_MESSAGE);
    const result = File.csvToJson(filepath);
    await rejects(result, rejection);
  }
  {
    const filepath = "./mocks/threeItems-valid.csv";
    const result = await File.csvToJson(filepath);
    const expected = [
      {
        id: 123,
        name: "Yazalde Filimone",
        profession: "Javascript Developer",
        birthday: 2004,
      },
      {
        id: 321,
        name: "John Doe",
        profession: "FrontEnd Developer",
        birthday: 2002,
      },
      {
        id: 342,
        name: "Victor Brawn",
        profession: "BackEnd Developer",
        birthday: 1944,
      },
    ];

    deepStrictEqual(JSON.stringify(result), JSON.stringify(expected));
  }
})();
