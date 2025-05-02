import * as React from 'react';
export const getColorBySubject = (subject) => {
    switch (subject) {
        case 'English':
            return '#e65e61';
        case 'Math':
            return ' #ed9a5e'; 
        case 'Science':
                return '#fce785' 
        case 'Social Studies':
            return '#85fc96';
        case 'Electives':
            return '#25e4f5';
    }
}