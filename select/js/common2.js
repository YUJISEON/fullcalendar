document.addEventListener('DOMContentLoaded', function() {
	const calendarEl = document.getElementById('calendarMonth');
    let unavailableDates = [];
    let peakSeasonDates = [];
    let fullyBookedDates = [];
	const calendar = new FullCalendar.Calendar(calendarEl, {
		plugins: ['dayGrid', 'interaction'],
        header: {
			left: '',
            center: 'title,prev,next',
            right: ''
		},
		columnFormat: {
			day: 'numeric'
		},
        events: [
            {
                start: '2023-11-10',
                end : '',
                type : 'unavailable'
            },
            {
                start: '2023-11-11',
                end : '',
                type : 'unavailable'
            },
            {
                start: '2023-11-12',
                end : '',
                type : 'unavailable'
            },
            {
                start: '2023-11-13',
                end : '',
                type : 'unavailable'
            },
            {
                start: '2023-11-20',
                end : '',
                type : 'peakseason'
            },
            {
                start: '2023-11-21',
                end : '',
                type : 'peakseason'
            },
            {
                start: '2023-11-22',
                end : '',
                type : 'peakseason'
            },
            {
                start: '2023-11-28',
                end : '',
                type : 'fullybooked'
            },
            {
                start: '2023-11-29',
                end : '',
                type : 'fullybooked'
            },
            {
                start: '2023-11-30',
                end : '',
                type : 'fullybooked'
            }
        ],
        // 날짜 선택
        selectable: true,
        selectAllow: function(selectInfo) {
            //console.log(selectInfo);

            const selectedStartDate = selectInfo.startStr;
            const selectedEndDate = selectInfo.endStr;
        
            // 만약 선택한 마지막 날짜가 포함되어 있다면 선택 불가능하도록 설정
            const selectedDates = getDatesBetween(selectedStartDate, selectedEndDate);
        
            for (let i = 0; i < selectedDates.length; i++) {
                if (unavailableDates.includes(selectedDates[i])) {
                    return false;
                }
            }
        
            return true;
        },
        select: function(info) {    
            //console.log(info);

            let selectedStartDate = info.startStr;
            let selectedEndDate = info.endStr;
            let selectedDates = getDatesBetween(selectedStartDate, selectedEndDate);

            if (fullyBookedDates.some(date => selectedDates.includes(date))) {
                alert('예약이 마감되었습니다.');
                calendar.unselect();
            } else if (peakSeasonDates.some(date => selectedDates.includes(date))) {
                alert('성수기 입니다.');
                calendar.unselect();
            } else if (unavailableDates.some(date => selectedDates.includes(date))) {
                alert('휴무 입니다.');
                calendar.unselect();
            }  else {
                
                console.log('selected ' + info.startStr + ' to ' + info.endStr);
                console.log(info.view.el);

                info.view.el.querySelectorAll('.fc-day-top').forEach(function(cell) {
                    const date = cell.getAttribute('data-date');   
    
                    if (selectedDates.includes(date)) {
                        cell.classList.add('select-day');
                    } else {
                        cell.classList.remove('select-day');
                    }
                });

                /*
                calendar.addEvent({
                    start: info.startStr,
                    end: info.endStr,
                    rendering: 'background',
                    classNames: 'fc-day-selected' // 여기서 클래스 추가
                });*/
            }

        },
		defaultDate: new Date(),
		eventLimit: true, // 		
		locale: 'ko',
        dayMaxEventRows: 10,       
        // 이벤트가 렌더링된 후 실행되는 이벤트
        eventRender: function(info) {
            const start = info.event.start;
            const formattedDate = start.toISOString().slice(0, 10);

            if( info.event.extendedProps.type == 'unavailable' ) {
                unavailableDates.push(formattedDate);    
            } else if( info.event.extendedProps.type == 'peakseason') {
                peakSeasonDates.push(formattedDate); 
            }   else if( info.event.extendedProps.type == 'fullybooked') {
                fullyBookedDates.push(formattedDate);
            }
        },
        // 캘린더가 렌더링된 후 실행되는 이벤트
        datesRender: function(info) {
            info.el.querySelectorAll('.fc-day').forEach(function(cell) {
                const date = cell.getAttribute('data-date');
                const jsDate = new Date(date);
                const dayOfWeek = jsDate.getDay(); // 0은 일요일, 6은 토요일

                if (dayOfWeek === 0 || dayOfWeek === 6) {
                    unavailableDates.push(date);
                }

                if (unavailableDates.includes(date) || dayOfWeek === 0 || dayOfWeek === 6) {
                    cell.classList.add('unavailable');
                } else if (peakSeasonDates.includes(date)) {
                    cell.classList.add('peak');
                } else if (fullyBookedDates.includes(date)) {
                    cell.classList.add('full');
                }
            });
        } 
	});

	calendar.render();

    function getDatesBetween(startDate, endDate) {
        var dates = [];
        var currentDate = new Date(startDate);
        while (currentDate < new Date(endDate)) {
            dates.push(currentDate.toISOString().slice(0,10));
            currentDate.setDate(currentDate.getDate() + 1);
        }
        return dates;
    }

});