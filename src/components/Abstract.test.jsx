import Abstract from "./Abstract";
import {render, screen } from '@testing-library/react'

 test('should render statistics number', () => { 
    const abstractObj = {
        k: 'nonce',
        obj: {
            nonce: 187514400
        }
    }
    render(<Abstract {...abstractObj} />)
    expect(screen.getByText("187,514,400")).toBeInTheDocument()
 })

 test('should render a time format YYYY-MM-DD HH:mm:ss', () => { 
    const abstractObj = {
        k: 'time',
        obj: {
            time: 1232510363
        }
    }
    render(<Abstract {...abstractObj} />)
    expect(screen.getByText("time")).toBeInTheDocument()
 })

 test('正确渲染一个布尔字符串', () => { 
    const abstractObj = {
        k: 'main_chain',
        obj: {
            main_chain: false
        }
    }
    render(<Abstract {...abstractObj} />)
    expect(screen.getByText("false")).toBeInTheDocument()
 })

