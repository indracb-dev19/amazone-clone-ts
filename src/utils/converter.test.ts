import { describe, expect, it } from 'vitest'
import { centsToDollar } from './converter'

describe('Dollar Converter', () => {
    it('format 1999 cents as 19.99', () => {
        expect(centsToDollar(1999)).toBe('19.99')
    })
    
    it('displays 2 decimals', () => {
        expect(centsToDollar(1090)).toBe('10.90')
        expect(centsToDollar(100)).toBe('1.00')
    })
})