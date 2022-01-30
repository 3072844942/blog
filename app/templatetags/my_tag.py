from django import template

register = template.Library()


@register.filter
def add1(item):
    return int(item) + 1
