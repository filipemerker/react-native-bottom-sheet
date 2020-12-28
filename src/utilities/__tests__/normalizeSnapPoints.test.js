import { normalizeSnapPoints } from '../normalizeSnapPoints';

describe('Utility - normalizeSnapPoints', () => {
  it('keeps snap points that are fixed numbers', () => {
    expect(normalizeSnapPoints([19, 76, 152], 200, 10)).toEqual([19, 76, 152])
  })

  it('converts snap points with percentage to fixed numbers', () => {
    expect(normalizeSnapPoints(['10%', '40%', '80%'], 200, 10)).toEqual([19, 76, 152])
  })

  it('throws custom Invariant Violation if snap point is not a number or a string', () => {
    try {
      normalizeSnapPoints([{}, '40%', '80%'], 200, 10)
    } catch ({ message, name }) {
      expect(name).toEqual('Invariant Violation')
      expect(message).toEqual(`'[object Object]' is not a valid snap point! expected types are string or number.`)
    }
  })

  it('throws custom Invariant Violation if snap point has no % sign', () => {
    try {
      normalizeSnapPoints(['test', '40%', '80%'], 200, 10)
    } catch ({ message, name }) {
      expect(name).toEqual('Invariant Violation')
      expect(message).toEqual(`'test' is not a valid percentage snap point! expected percentage snap point must include '%'. e.g. '50%'`)
    }
  })

  it('throws custom Invariant Violation if snap point has extra characters', () => {
    try {
      normalizeSnapPoints(['test 10%', '40%', '80%'], 200, 10)
    } catch ({ message, name }) {
      expect(name).toEqual('Invariant Violation')
      expect(message).toEqual(`'test 10%' is not a valid percentage snap point! expected percentage snap point must be only numbers and '%'. e.g. '50%'`)
    }
  })
})