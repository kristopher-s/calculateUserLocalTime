# Description

We don't want to make outbound call to user if outside working hours for user in their local time zone.

# Known Issues

1. Doesn't handle cases w/o technical info in ticket object.
2. Doesn't handle cases where timezone missing from timezone array.

# Planned Improvements

1. Display warning when trying to call user outside of working hours for the user.
2. Find more efficient way to do this. Less code.
