module.exports = {
  verbose: true,
  setupFilesAfterEnv: ['<rootDir>jest.setup.js', '<rootDir>node_modules/regenerator-runtime/runtime'],
  moduleFileExtensions: ["js", "jsx"],
  moduleDirectories: ["node_modules", "bower_components", "shared"],
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/__mocks__/fileMock.js",
    "\\.(css|less|scss|sass)$": "<rootDir>/__mocks__/styleMock.js",
  },
  transform: {
    "^.+\\.js$": "babel-jest",
    "^.+\\.jsx?$": "babel-jest"
  },
  // snapshotSerializers: ["enzyme-to-json/serializer"]

}