$(function () {
    mui ('.mui-slider').slider({
        interval:5000
    });
/*����mi����Ĺ�����,*/
    mui ('.mui-scroll-wrapper').scroll({
        scrollY: true, //�Ƿ��������
        scrollX: false, //�Ƿ�������
        startX: 0, //��ʼ��ʱ������x
        startY: 0, //��ʼ��ʱ������y
        indicators: false, //�Ƿ���ʾ������
        deceleration:0.0001, //����ϵ��,ϵ��ԽС����Խ����
        bounce: true //�Ƿ����ûص�
    })
});