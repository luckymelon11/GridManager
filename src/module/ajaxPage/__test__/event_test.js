import getEventFN from '@module/ajaxPage/event';
import { TOOLBAR_KEY } from '@common/constants';

describe('getAjaxEvent', () => {
    let events = null;
    beforeEach(() => {
    });
    afterEach(() => {
        events = null;
    });

    it('基础验证', () => {
        expect(getEventFN).toBeDefined();
        expect(getEventFN.length).toBe(2);
    });

    it('执行验证', () => {
        events = getEventFN('test', '#baukh');
        expect(events.gotoPage.events).toBe('keyup');
        expect(events.gotoPage.target).toBe(`[${TOOLBAR_KEY}="test"]`);
        expect(events.gotoPage.selector).toBe('.gp-input');

        expect(events.firstPage.events).toBe('click');
        expect(events.firstPage.target).toBe(`[${TOOLBAR_KEY}="test"]`);
        expect(events.firstPage.selector).toBe('[pagination-before] .first-page');

        expect(events.previousPage.events).toBe('click');
        expect(events.previousPage.target).toBe(`[${TOOLBAR_KEY}="test"]`);
        expect(events.previousPage.selector).toBe('[pagination-before] .previous-page');

        expect(events.nextPage.events).toBe('click');
        expect(events.nextPage.target).toBe(`[${TOOLBAR_KEY}="test"]`);
        expect(events.nextPage.selector).toBe('[pagination-after] .next-page');

        expect(events.lastPage.events).toBe('click');
        expect(events.lastPage.target).toBe(`[${TOOLBAR_KEY}="test"]`);
        expect(events.lastPage.selector).toBe('[pagination-after] .last-page');

        expect(events.numberPage.events).toBe('click');
        expect(events.numberPage.target).toBe(`[${TOOLBAR_KEY}="test"]`);
        expect(events.numberPage.selector).toBe('[pagination-number] li');

        expect(events.refresh.events).toBe('click');
        expect(events.refresh.target).toBe(`[${TOOLBAR_KEY}="test"]`);
        expect(events.refresh.selector).toBe('.refresh-action');

        expect(events.changePageSize.events).toBe('change');
        expect(events.changePageSize.target).toBe(`[${TOOLBAR_KEY}="test"]`);
        expect(events.changePageSize.selector).toBe('select[name=pSizeArea]');
    });
});
