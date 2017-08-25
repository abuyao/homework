
describe('测试点赞函数', function() {
	it('点赞函数 执行一次 PraiseButton praise() 返回值就+1', function(){
		var thumb = new PraiseButton();
		expect(thumb.praise()).toBe(1);
		expect(thumb.praise()).toBe(2);
		expect(thumb.praise()).toBe(3);
		expect(thumb.praise()).toBe(4);
		expect(thumb.praise()).toBe(5);
	});
})