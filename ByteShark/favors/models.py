from django.db import models
from django.utils.translation import gettext_lazy as  _

# Create your models here.

    # username = name of the person requiring assistance
    # description = description of their favor
    # tag = cateogrized type of favor
    # loaned = whether the item has been loaned
    # returned = whether the item has been returned to its original owner

class Favor(models.Model):
    username = models.CharField(max_length=100)
    description = models.CharField(max_length=300)
    tag = models.CharField(max_length=100)
    created_at = models.DateTimeField(auto_now_add=True)

    class CompletenessStatus(models.TextChoices):
        INCOMPLETE = 'INC', _('Incomplete')
        COMPLETE = 'COM', _('Complete')

    loaned = models.CharField(
        max_length=3,
        choices=CompletenessStatus.choices,
        default=CompletenessStatus.INCOMPLETE,
    )
    returned = models.CharField(
        max_length=3,
        choices=CompletenessStatus.choices,
        default=CompletenessStatus.INCOMPLETE,
    )
    

