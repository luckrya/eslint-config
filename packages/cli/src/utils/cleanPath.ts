export default function cleanPath(_path: string) {
  return _path.replace(/\/\//g, "/");
}
