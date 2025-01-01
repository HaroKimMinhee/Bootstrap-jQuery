// 버튼
$(document).ready(function() {
    $('.num-btn').on('click', function() {
        const value = $(this).data('value');  // 버튼의 data-value 속성 값 가져오기
        
        // 모든 버튼 색상 초기화
        $('.num-btn').css('color', 'black');  

        // 클릭된 버튼에 맞는 색상 변경
        if (value === 1) {
            $(this).css('color', 'Blue');  // '①' 클릭 시 파란색
        } else if (value === 2) {
            $(this).css('color', 'Red');  // '②' 클릭 시 빨간색
        } else if (value === 3) {
            $(this).css('color', 'Green');  // '③' 클릭 시 초록색
        } else if (value === 4) {
            $(this).css('color', 'Orange');  // '④' 클릭 시 오커색
        } else if (value === 5) {
            $(this).css('color', 'Gold');  // '⑤' 클릭 시 금색
        } else if (value === 6) {
            $(this).css('color', '#98FF98');  // '⑥' 클릭 시 민트색
        }

        // 버튼 크기 커지기 애니메이션
        $(this).animate(
            {
                fontSize: '40px'  // 크기를 40px로 늘리기
            },
            1000,  // 1초 동안 애니메이션 실행
            function() {
                // 애니메이션 끝나고 원래 크기로 돌아가기
                $(this).animate(
                    {
                        fontSize: '20px'  // 원래 크기인 20px로 돌아가기
                    },
                    1000  // 1초 동안 원래 크기로 돌아가기
                );
            }
        );
    });
});

// 생년월일과 몸무게
$(document).ready(function() {
    $('#submitBtn').on('click', function() {
        // 각 입력값을 가져오기
        const year = $('.year').val();
        const month = $('.ma').val();
        const day = $('.day').val();
        const weight = $('.we').val();

        // 빈 입력값 체크
        if (!year || !month || !day || !weight) {
            // 빈 입력값이 있을 경우 알림창 띄우기
            alert("모든 항목을 입력해주세요.");
        } else {
            // 모든 항목이 입력되었으면 체크 표시
            $('#checkIcon').show(); // 체크 아이콘 표시
        }
    });
});

$(document).ready(function() {
    $('#submitBtn').on('click', function() {
        // 테이블에 입력된 값 가져오기
        const name = $('#name').val().trim();
        const regno = $('#regno').val().trim();
        const contact = $('#contact').val().trim();
        const guardianName = $('#guardian_name').val().trim();
        const relationship = $('#relationship').val().trim();
        const email = $('#email').val().trim();

        // 빈 값 체크
        if (!name || !regno || !contact || !guardianName || !relationship || !email) {
            alert('모든 항목을 입력해주세요.');
        } else {
            // 모든 항목이 입력된 경우, 값 출력
            alert(`수검자 성명: ${name}\n주민등록번호: ${regno}\n보호자 연락처: ${contact}\n보호자 성명: ${guardianName}\n수검자와의 관계: ${relationship}\nE-mail: ${email}`);
        }
    });
});


// 건강검진 문진표
$(document).ready(function() {
    $('h1').on('click', function() {
        const value = $(this).data('value');  // 버튼의 data-value 속성 값 가져오기

        console.log(value);  // 클릭 시 data-value 출력 확인

        // 버튼 크기 커지기 애니메이션
        $(this).animate(
            {
                fontSize: '40px'  // 크기를 40px로 늘리기
            },
            1000,  // 1초 동안 애니메이션 실행
            function() {
                // 애니메이션 끝나고 원래 크기로 돌아가기
                $(this).animate(
                    {
                        fontSize: '20px'  // 원래 크기인 20px로 돌아가기
                    },
                    1000  // 1초 동안 원래 크기로 돌아가기
                );
            }
        );
    });
});

// th 부분
$(document).ready(function() {
    $('th').on('click', function() {
        const value = $(this).data('value');  // 버튼의 data-value 속성 값 가져오기

        console.log(value);  // 클릭 시 data-value 출력 확인

        // 버튼 크기 커지기 애니메이션
        $(this).animate(
            {
                fontSize: '40px'  // 크기를 40px로 늘리기
            },
            1000,  // 1초 동안 애니메이션 실행
            function() {
                // 애니메이션 끝나고 원래 크기로 돌아가기
                $(this).animate(
                    {
                        fontSize: '20px'  // 원래 크기인 20px로 돌아가기
                    },
                    1000  // 1초 동안 원래 크기로 돌아가기
                );
            }
        );
    });
});

// h3 부분
$(document).ready(function() {
    $('h3').on('click', function() {
        const value = $(this).data('value');  // 버튼의 data-value 속성 값 가져오기

        console.log(value);  // 클릭 시 data-value 출력 확인

        // 버튼 크기 커지기 애니메이션
        $(this).animate(
            {
                fontSize: '40px'  // 크기를 40px로 늘리기
            },
            1000,  // 1초 동안 애니메이션 실행
            function() {
                // 애니메이션 끝나고 원래 크기로 돌아가기
                $(this).animate(
                    {
                        fontSize: '20px'  // 원래 크기인 20px로 돌아가기
                    },
                    1000  // 1초 동안 원래 크기로 돌아가기
                );
            }
        );
    });
});


// td 부분
$(document).ready(function() {
    $('td').on('click', function() {
        const value = $(this).data('value');  // 버튼의 data-value 속성 값 가져오기

        console.log(value);  // 클릭 시 data-value 출력 확인

        // 버튼 크기 커지기 애니메이션
        $(this).animate(
            {
                fontSize: '20px'  // 크기를 40px로 늘리기
            },
            1000,  // 1초 동안 애니메이션 실행
            function() {
                // 애니메이션 끝나고 원래 크기로 돌아가기
                $(this).animate(
                    {
                        fontSize: '10px'  // 원래 크기인 20px로 돌아가기
                    },
                    1000  // 1초 동안 원래 크기로 돌아가기
                );
            }
        );
    });
});


// 메일 또는 우편 등으로 받아 보는 것에 동의
$(document).ready(function() {
    // '예' 체크박스를 클릭했을 때
    $('#yes').on('click', function() {
        // '예'를 선택했으면 '아니오'를 해제
        if ($(this).prop('checked')) {
            $('#no').prop('checked', false);
        }
    });

    // '아니오' 체크박스를 클릭했을 때
    $('#no').on('click', function() {
        // '아니오'를 선택했으면 '예'를 해제
        if ($(this).prop('checked')) {
            $('#yes').prop('checked', false);
        }
    });
});

// 미숙아 탄생 여부
$(document).ready(function() {
    // '예' 체크박스를 클릭했을 때
    $('#yes1').on('click', function() {
        // '예'를 선택했으면 '아니오'를 해제
        if ($(this).prop('checked')) {
            $('#no1').prop('checked', false);
        }
    });

    // '아니오' 체크박스를 클릭했을 때
    $('#no1').on('click', function() {
        // '아니오'를 선택했으면 '예'를 해제
        if ($(this).prop('checked')) {
            $('#yes1').prop('checked', false);
        }
    });
});

// 유튜브 테두리
$(document).ready(function() {
    // iframe 요소에 둥근 테두리 적용
    $('iframe').css({
        'border-radius': '20px',  // 20px로 둥글게
        'overflow': 'hidden',       // 테두리 바깥으로 넘치는 부분 숨기기
        'border' : '5px solid blue'
    });
});

$(function() {
    $("#startDate").datepicker({
        minDate:+1,
        maxDate:"+1M"
    });
});