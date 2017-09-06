async function test(){
    return axios.post("/api/thumb");
}

describe('测试点赞函数', function() {
	it('点赞函数 执行一次 PraiseButton praise() 返回值就+1', function(){
        expect(test().data).toBe(1);
        expect(test().data).toBe(2);
        expect(test().data).toBe(3);
        expect(test().data).toBe(4);
        expect(test().data).toBe(5);
        expect(test().data).toBe(6);
        expect(test().data).toBe(7);
        expect(test().data).toBe(8);
        expect(test().data).toBe(9);
        expect(test().data).toBe(10);
	});
})