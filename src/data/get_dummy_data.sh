# Date with most games
SCHEDULE_DATE="2024-10-09"

OUTPUT_FILE="dummy_schedule.json"

SCHEDULE_DATA=$(curl -s -X GET "https://api-web.nhle.com/v1/schedule/${SCHEDULE_DATE}")

echo "$SCHEDULE_DATA" > "$OUTPUT_FILE"

echo "Schedule data for $SCHEDULE_DATE saved to $OUTPUT_FILE"