(function () {
    'use strict';

    function blockEvent(e) {
        e.preventDefault();
        e.stopPropagation();
        return false;
    }

    function isDevToolsShortcut(e) {
        var key = e.key || '';
        var code = e.code || '';
        var ctrl = e.ctrlKey || e.metaKey;
        var shift = e.shiftKey;
        var alt = e.altKey;

        if (key === 'F12' || code === 'F12') return true;

        if (ctrl && shift && (key === 'I' || key === 'i' || code === 'KeyI')) return true;
        if (ctrl && shift && (key === 'J' || key === 'j' || code === 'KeyJ')) return true;
        if (ctrl && shift && (key === 'C' || key === 'c' || code === 'KeyC')) return true;
        if (ctrl && shift && (key === 'K' || key === 'k' || code === 'KeyK')) return true;

        if (ctrl && !shift && !alt && (key === 'U' || key === 'u' || code === 'KeyU')) return true;

        if (e.metaKey && alt && (key === 'I' || key === 'i' || code === 'KeyI')) return true;
        if (e.metaKey && alt && (key === 'J' || key === 'j' || code === 'KeyJ')) return true;
        if (e.metaKey && alt && (key === 'C' || key === 'c' || code === 'KeyC')) return true;

        return false;
    }

    document.addEventListener('keydown', function (e) {
        if (isDevToolsShortcut(e)) {
            blockEvent(e);
        }
    }, true);

    document.addEventListener('keyup', function (e) {
        if (isDevToolsShortcut(e)) {
            blockEvent(e);
        }
    }, true);

    document.addEventListener('contextmenu', blockEvent, true);

    window.addEventListener('keydown', function (e) {
        if (isDevToolsShortcut(e)) {
            blockEvent(e);
        }
    }, true);
})();
