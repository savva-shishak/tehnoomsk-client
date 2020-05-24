export function valueAtMode ({ dev, prod }) {
  if (process.env.NODE_ENV === 'development') {
    return dev;
  }

  return prod;
}
