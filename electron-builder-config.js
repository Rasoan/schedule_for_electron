'use strict';

const config = {
    productName: "schedule",
    appId: "_schedule_",
    target: "nsis",
    asar: true,
    icon: "public/localeicons/scheduleIMG.png",
    directories: {
        output: "build",
        buildResources: "public/localeicons"
    },
    /**
     * Для того, что бы передавать переменные из "scripts" в "main" процесс,
     * нужно в "script" команду, добавить "set IS_DEBUG_MODE=1", и тогда это отразится ТОЛЬКО здесь,
     * дальше нужно прокинуть это значение в свойства extraMetadata,
     * которое не работает или я не понял, как его использовать
     * ("main process" упрямо отображает package.json не учитывая extraMetadata).
     * Когда появится время, нужно сидеть и экспериментировать.
     *
     * Способ опрокидывания значения из скрипта в "main process" взял отсюда.
     * https://stackoverflow.com/questions/54214340/electron-builder-how-to-set-node-environmental-variables
     *
     * Что такое extraMetadata
     * https://www.electron.build/configuration/configuration.html
     */
    extraMetadata: {
        IS_DEBUG_MODE: process.env.IS_DEBUG_MODE,
    },
    files: [
        // эту папку здесь указывать не нужно,
        // но экспериментальным путём было обнаружено,
        // что если не добавить сюда "dist",
        // то вес программы увеличиться на ~200 MB.
        "dist",
    ],
};

module.exports = config;